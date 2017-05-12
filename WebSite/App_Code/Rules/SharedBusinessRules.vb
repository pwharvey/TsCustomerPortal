Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Linq
Imports TimberSmart.Data
Imports System.Xml
Imports System.Xml.XPath

Namespace TimberSmart.Rules
    
    Partial Public Class SharedBusinessRules
        Inherits TimberSmart.Data.BusinessRules

        Protected Overrides Sub EnumerateDynamicAccessControlRules(controllerName As String)
            If controllerName <> "Users" And controllerName <> "Customer" Then
                If Not UserIsInRole("Admins") Then
                    RegisterAccessControlRule(
                        "CustomerID",
                        "select CustomerID from Users where UserID = @UserID",
                        AccessPermission.Allow,
                        New SqlParam("@UserID", UserId))
                End If
            End If
        End Sub

        Public Overrides Function SupportsVirtualization(controllerName As String) As Boolean
            Return Left(controllerName, 11) = "Consignment" 'Not UserIsInRole("Admins")
        End Function

        Public Overrides Sub VirtualizeController(controllerName As String,
            navigator As XPathNavigator, resolver As XmlNamespaceManager)

            If Left(controllerName, 11) = "Consignment" Then
                Dim restrictedCommands() As String =
                {"Edit", "New", "Delete", "Duplicate", "Import"}
                Dim actionIterator As XPathNodeIterator = navigator.Select("//c:action", resolver)
                While (actionIterator.MoveNext())
                    Dim commandName As String = actionIterator.Current.GetAttribute(
                        "commandName", String.Empty)
                    If (restrictedCommands.Contains(commandName)) Then
                        actionIterator.Current.CreateAttribute(
                            String.Empty, "roles", String.Empty, "Consignment Edit")
                    End If
                End While
            End If
            If controllerName = "ConsignmentUsage" Then
                ''NodeSet().SelectActions("Edit", "Delete").WhenClientScript("[SentOn] == null")
                Dim restrictedCommands() As String =
                {"Edit", "New", "Delete", "Duplicate", "Import"}
                Dim actionIterator As XPathNodeIterator = navigator.Select("//c:action", resolver)
                While (actionIterator.MoveNext())
                    Dim commandName As String = actionIterator.Current.GetAttribute(
                        "commandName", String.Empty)
                    If (restrictedCommands.Contains(commandName)) Then
                        actionIterator.Current.CreateAttribute(
                            String.Empty, "whenClientScript", String.Empty, "[SentOn]==null")
                    End If
                End While
            End If
        End Sub


    End Class
End Namespace
