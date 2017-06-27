Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Linq
Imports TimberSmart.Data

Namespace Models
    
    Partial Public Class UsersModel
        Inherits BusinessRulesObjectModel
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_UserID As Nullable(Of Integer)
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_UserName As String
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_Password As String
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_Email As String
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_Comment As String
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_PasswordQuestion As String
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_PasswordAnswer As String
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_IsApproved As Nullable(Of Boolean)
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_LastActivityDate As Nullable(Of DateTime)
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_LastLoginDate As Nullable(Of DateTime)
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_LastPasswordChangedDate As Nullable(Of DateTime)
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_CreationDate As Nullable(Of DateTime)
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_IsLockedOut As Nullable(Of Boolean)
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_LastLockedOutDate As Nullable(Of DateTime)
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_FailedPasswordAttemptCount As Nullable(Of Integer)
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_FailedPasswordAttemptWindowStart As Nullable(Of DateTime)
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_FailedPasswordAnswerAttemptCount As Nullable(Of Integer)
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_FailedPasswordAnswerAttemptWindowStart As Nullable(Of DateTime)
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_CustomerID As Nullable(Of Integer)
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_CustomerName As String
        
        Public Sub New()
            MyBase.New
        End Sub
        
        Public Sub New(ByVal r As BusinessRules)
            MyBase.New(r)
        End Sub
        
        Public Property UserID() As Nullable(Of Integer)
            Get
                Return m_UserID
            End Get
            Set
                m_UserID = value
                UpdateFieldValue("UserID", value)
            End Set
        End Property
        
        Public Property UserName() As String
            Get
                Return m_UserName
            End Get
            Set
                m_UserName = value
                UpdateFieldValue("UserName", value)
            End Set
        End Property
        
        Public Property Password() As String
            Get
                Return m_Password
            End Get
            Set
                m_Password = value
                UpdateFieldValue("Password", value)
            End Set
        End Property
        
        Public Property Email() As String
            Get
                Return m_Email
            End Get
            Set
                m_Email = value
                UpdateFieldValue("Email", value)
            End Set
        End Property
        
        Public Property Comment() As String
            Get
                Return m_Comment
            End Get
            Set
                m_Comment = value
                UpdateFieldValue("Comment", value)
            End Set
        End Property
        
        Public Property PasswordQuestion() As String
            Get
                Return m_PasswordQuestion
            End Get
            Set
                m_PasswordQuestion = value
                UpdateFieldValue("PasswordQuestion", value)
            End Set
        End Property
        
        Public Property PasswordAnswer() As String
            Get
                Return m_PasswordAnswer
            End Get
            Set
                m_PasswordAnswer = value
                UpdateFieldValue("PasswordAnswer", value)
            End Set
        End Property
        
        Public Property IsApproved() As Nullable(Of Boolean)
            Get
                Return m_IsApproved
            End Get
            Set
                m_IsApproved = value
                UpdateFieldValue("IsApproved", value)
            End Set
        End Property
        
        Public Property LastActivityDate() As Nullable(Of DateTime)
            Get
                Return m_LastActivityDate
            End Get
            Set
                m_LastActivityDate = value
                UpdateFieldValue("LastActivityDate", value)
            End Set
        End Property
        
        Public Property LastLoginDate() As Nullable(Of DateTime)
            Get
                Return m_LastLoginDate
            End Get
            Set
                m_LastLoginDate = value
                UpdateFieldValue("LastLoginDate", value)
            End Set
        End Property
        
        Public Property LastPasswordChangedDate() As Nullable(Of DateTime)
            Get
                Return m_LastPasswordChangedDate
            End Get
            Set
                m_LastPasswordChangedDate = value
                UpdateFieldValue("LastPasswordChangedDate", value)
            End Set
        End Property
        
        Public Property CreationDate() As Nullable(Of DateTime)
            Get
                Return m_CreationDate
            End Get
            Set
                m_CreationDate = value
                UpdateFieldValue("CreationDate", value)
            End Set
        End Property
        
        Public Property IsLockedOut() As Nullable(Of Boolean)
            Get
                Return m_IsLockedOut
            End Get
            Set
                m_IsLockedOut = value
                UpdateFieldValue("IsLockedOut", value)
            End Set
        End Property
        
        Public Property LastLockedOutDate() As Nullable(Of DateTime)
            Get
                Return m_LastLockedOutDate
            End Get
            Set
                m_LastLockedOutDate = value
                UpdateFieldValue("LastLockedOutDate", value)
            End Set
        End Property
        
        Public Property FailedPasswordAttemptCount() As Nullable(Of Integer)
            Get
                Return m_FailedPasswordAttemptCount
            End Get
            Set
                m_FailedPasswordAttemptCount = value
                UpdateFieldValue("FailedPasswordAttemptCount", value)
            End Set
        End Property
        
        Public Property FailedPasswordAttemptWindowStart() As Nullable(Of DateTime)
            Get
                Return m_FailedPasswordAttemptWindowStart
            End Get
            Set
                m_FailedPasswordAttemptWindowStart = value
                UpdateFieldValue("FailedPasswordAttemptWindowStart", value)
            End Set
        End Property
        
        Public Property FailedPasswordAnswerAttemptCount() As Nullable(Of Integer)
            Get
                Return m_FailedPasswordAnswerAttemptCount
            End Get
            Set
                m_FailedPasswordAnswerAttemptCount = value
                UpdateFieldValue("FailedPasswordAnswerAttemptCount", value)
            End Set
        End Property
        
        Public Property FailedPasswordAnswerAttemptWindowStart() As Nullable(Of DateTime)
            Get
                Return m_FailedPasswordAnswerAttemptWindowStart
            End Get
            Set
                m_FailedPasswordAnswerAttemptWindowStart = value
                UpdateFieldValue("FailedPasswordAnswerAttemptWindowStart", value)
            End Set
        End Property
        
        Public Property CustomerID() As Nullable(Of Integer)
            Get
                Return m_CustomerID
            End Get
            Set
                m_CustomerID = value
                UpdateFieldValue("CustomerID", value)
            End Set
        End Property
        
        Public Property CustomerName() As String
            Get
                Return m_CustomerName
            End Get
            Set
                m_CustomerName = value
                UpdateFieldValue("CustomerName", value)
            End Set
        End Property
    End Class
End Namespace
