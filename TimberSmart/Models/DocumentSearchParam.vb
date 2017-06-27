Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Linq
Imports TimberSmart.Data

Namespace Models
    
    Partial Public Class DocumentSearchParamModel
        Inherits BusinessRulesObjectModel
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_CustomerID As Nullable(Of Integer)
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_SourceID As String
        
        Public Sub New()
            MyBase.New
        End Sub
        
        Public Sub New(ByVal r As BusinessRules)
            MyBase.New(r)
        End Sub
        
        Public Property CustomerID() As Nullable(Of Integer)
            Get
                Return m_CustomerID
            End Get
            Set
                m_CustomerID = value
                UpdateFieldValue("CustomerID", value)
            End Set
        End Property
        
        Public Property SourceID() As String
            Get
                Return m_SourceID
            End Get
            Set
                m_SourceID = value
                UpdateFieldValue("SourceID", value)
            End Set
        End Property
    End Class
End Namespace
